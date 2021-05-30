import { useState } from "react";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";

import { UploadEpisode } from "../../components/UploadEpisode/UploadEpisode";

export default function Upload() {
  const [uploadImageSuccess, setUploadImageSuccess] = useState(false);
  const [uploadAudioSuccess, setUploadAudioSuccess] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const uploadImageToS3 = async (data) => {
    const file = data.image[0];
    const filename = encodeURIComponent(file.name);
    const res = await fetch(`/api/upload-image-url?file=${filename}`);
    const { url, fields } = await res.json();
    const formData = new FormData();

    Object.entries({ ...fields, file }).forEach(([key, value]: any) => {
      formData.append(key, value);
    });

    const upload = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (upload.ok) {
      console.log("Uploaded image successfully!");
    } else {
      console.error("Upload image failed.");
    }
  };

  const uploadAudioToS3 = async (data) => {
    const file = data.audio[0];
    const filename = encodeURIComponent(file.name);
    const res = await fetch(`/api/upload-audio-url?file=${filename}`);
    const { url, fields } = await res.json();
    const formData = new FormData();

    Object.entries({ ...fields, file }).forEach(([key, value]: any) => {
      formData.append(key, value);
    });

    const upload = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (upload.ok) {
      console.log("Uploaded audio successfully!");
    } else {
      console.error("Upload audio failed!");
    }
  };

  const postEpisodeToDatabase = async (data) => {
    const { title, description, author, season, episode, image, audio } = data;

    const imagename = encodeURIComponent(image[0].name);
    const audioname = encodeURIComponent(audio[0].name);

    const body = {
      title,
      description,
      author,
      created_at: dayjs().toISOString(),
      season,
      episode,
      image: imagename,
      audio: audioname,
    };

    const res = await fetch("http://localhost:3000/api/podcasts", {
      method: "POST",
      body: JSON.stringify(body),
    });

    if (res.ok) {
      console.log("Uploaded episode successfully!");
    } else {
      console.error("Upload episode failed!");
    }
  };

  const onSubmit = (data) => {
    uploadImageToS3(data);
    uploadAudioToS3(data);
    postEpisodeToDatabase(data);
  };

  return (
    <section className="container flex flex-col items-center justify-center w-1/2 h-screen mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/2 p-8 border-2 border-black border-solid"
      >
        <UploadEpisode register={register} errors={errors} />
      </form>
    </section>
  );
}
