import { useEffect, useState } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import axios from "axios";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Episode({ episode }) {
  const [episodeImage, setEpisodeImage] =
    useState<string | undefined>(undefined);
  const [episodeAudio, setEpisodeAudio] =
    useState<string | undefined>(undefined);

  useEffect(() => {
    const getImageUrl = async () => {
      const data = await axios
        .get(
          `http://localhost:3000/api/download-image-url?file=${episode.image}`
        )
        .then((res) => setEpisodeImage(res.data));

      return data;
    };
    getImageUrl();
  }, []);

  useEffect(() => {
    const getAudioUrl = async () => {
      const data = await axios
        .get(
          `http://localhost:3000/api/download-audio-url?file=${episode.audio}`
        )
        .then((res) => setEpisodeAudio(res.data));

      return data;
    };
    getAudioUrl();
  }, []);

  return (
    <section
      className="w-10/12 mx-auto my-40 bg-white border border-gray-200 border-solid shadow-lg 2xl:w-1/2"
      key={episode.id}
    >
      <div className="w-full">
        {episodeImage && (
          <Image
            className="w-full"
            src={episodeImage}
            alt={episode.title}
            layout="responsive"
            width="360px"
            height="240px"
          />
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center py-2 space-x-2 lg:space-x-4">
          <div className="flex items-center space-x-2 lg:space-x-4">
            <svg
              className="w-3 h-3 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path d="M60 13.3H34.7V9.9c1.6-.8 2.7-2.7 2.7-4.5-.1-3-2.5-5.4-5.4-5.4s-5.3 2.4-5.3 5.3c0 1.9 1.1 3.7 2.7 4.5v3.5H4c-2.1 0-4 1.6-4 4V60c0 2.1 1.9 4 4 4h56c2.1 0 4-1.9 4-4V17.4c0-2.2-1.9-4.1-4-4.1zm-1.3 45.4H5.3V32h53.3v26.7zm-53.4-32v-8h53.3v8H5.3z" />
              <path d="M14.7 42.7h2.7c.8 0 1.3-.5 1.3-1.3v-2.7c0-.8-.5-1.3-1.3-1.3h-2.7c-.8 0-1.3.5-1.3 1.3v2.7c-.1.7.5 1.3 1.3 1.3zM25.3 42.7H28c.8 0 1.3-.5 1.3-1.3v-2.7c0-.8-.5-1.3-1.3-1.3h-2.7c-.8 0-1.3.5-1.3 1.3v2.7c0 .7.5 1.3 1.3 1.3zM36 42.7h2.7c.8 0 1.3-.5 1.3-1.3v-2.7c0-.8-.5-1.3-1.3-1.3H36c-.8 0-1.3.5-1.3 1.3v2.7c0 .7.5 1.3 1.3 1.3zM46.7 42.7h2.7c.8 0 1.3-.5 1.3-1.3v-2.7c0-.8-.5-1.3-1.3-1.3h-2.7c-.8 0-1.3.5-1.3 1.3v2.7c-.1.7.5 1.3 1.3 1.3zM14.7 53.3h2.7c.8 0 1.3-.5 1.3-1.3v-2.7c0-.8-.5-1.3-1.3-1.3h-2.7c-.8 0-1.3.5-1.3 1.3V52c-.1.8.5 1.3 1.3 1.3zM25.3 53.3H28c.8 0 1.3-.5 1.3-1.3v-2.7c0-.8-.5-1.3-1.3-1.3h-2.7c-.8 0-1.3.5-1.3 1.3V52c0 .8.5 1.3 1.3 1.3zM36 53.3h2.7c.8 0 1.3-.5 1.3-1.3v-2.7c0-.8-.5-1.3-1.3-1.3H36c-.8 0-1.3.5-1.3 1.3V52c0 .8.5 1.3 1.3 1.3zM46.7 53.3h2.7c.8 0 1.3-.5 1.3-1.3v-2.7c0-.8-.5-1.3-1.3-1.3h-2.7c-.8 0-1.3.5-1.3 1.3V52c-.1.8.5 1.3 1.3 1.3z" />
            </svg>
            <p className="text-xs text-gray-500">
              {dayjs(episode.created_at).format("DD/MM/YY")}
            </p>
          </div>
          <div className="flex items-center space-x-2 lg:space-x-4">
            <svg
              className="w-3 h-3 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path d="M32.1 37.3c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm0-26.6c-5.9 0-10.7 4.8-10.7 10.7S26.3 32 32.1 32s10.7-4.8 10.7-10.7S38 10.7 32.1 10.7zM2.8 58.7c-.8 0-1.6-.3-2.1-1.1-1.1-1.1-.8-2.9.3-3.7 8.8-7.2 19.7-11.2 31.2-11.2s22.4 4 30.9 11.2c1.1 1.1 1.3 2.7.3 3.7-1.1 1.1-2.7 1.3-3.7.3-7.6-6.4-17.4-9.9-27.6-9.9s-20 3.5-27.7 10.1c-.3.3-1.1.6-1.6.6z" />
            </svg>
            <p className="text-xs text-gray-500">{episode.author}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between h-60">
          <div>
            <h3 className="font-semibold">{episode.title}</h3>
            <p className="my-4 text-sm">{episode.description}</p>
          </div>
          <AudioPlayer src={episodeAudio} />
        </div>
      </div>
      {/* <div className="flex flex-col items-start justify-start w-full h-full space-x-4 lg:p-4 lg:flex-row">
        <div className="w-full lg:w-1/3">
          {episodeImage && (
            <Image
              src={episodeImage}
              alt={episode.title}
              layout="responsive"
              width="240px"
              height="240px"
            />
          )}
        </div>
        <div className="flex flex-col items-start justify-between w-full lg:w-2/3 h-60">
          <div className="w-full">
            <div className="flex w-full h-10 my-4 space-x-4 text-gray-400 2xl:my-0 2xl:mb-2">
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
              >
                <path d="M60 13.3H34.7V9.9c1.6-.8 2.7-2.7 2.7-4.5-.1-3-2.5-5.4-5.4-5.4s-5.3 2.4-5.3 5.3c0 1.9 1.1 3.7 2.7 4.5v3.5H4c-2.1 0-4 1.6-4 4V60c0 2.1 1.9 4 4 4h56c2.1 0 4-1.9 4-4V17.4c0-2.2-1.9-4.1-4-4.1zm-1.3 45.4H5.3V32h53.3v26.7zm-53.4-32v-8h53.3v8H5.3z" />
                <path d="M14.7 42.7h2.7c.8 0 1.3-.5 1.3-1.3v-2.7c0-.8-.5-1.3-1.3-1.3h-2.7c-.8 0-1.3.5-1.3 1.3v2.7c-.1.7.5 1.3 1.3 1.3zM25.3 42.7H28c.8 0 1.3-.5 1.3-1.3v-2.7c0-.8-.5-1.3-1.3-1.3h-2.7c-.8 0-1.3.5-1.3 1.3v2.7c0 .7.5 1.3 1.3 1.3zM36 42.7h2.7c.8 0 1.3-.5 1.3-1.3v-2.7c0-.8-.5-1.3-1.3-1.3H36c-.8 0-1.3.5-1.3 1.3v2.7c0 .7.5 1.3 1.3 1.3zM46.7 42.7h2.7c.8 0 1.3-.5 1.3-1.3v-2.7c0-.8-.5-1.3-1.3-1.3h-2.7c-.8 0-1.3.5-1.3 1.3v2.7c-.1.7.5 1.3 1.3 1.3zM14.7 53.3h2.7c.8 0 1.3-.5 1.3-1.3v-2.7c0-.8-.5-1.3-1.3-1.3h-2.7c-.8 0-1.3.5-1.3 1.3V52c-.1.8.5 1.3 1.3 1.3zM25.3 53.3H28c.8 0 1.3-.5 1.3-1.3v-2.7c0-.8-.5-1.3-1.3-1.3h-2.7c-.8 0-1.3.5-1.3 1.3V52c0 .8.5 1.3 1.3 1.3zM36 53.3h2.7c.8 0 1.3-.5 1.3-1.3v-2.7c0-.8-.5-1.3-1.3-1.3H36c-.8 0-1.3.5-1.3 1.3V52c0 .8.5 1.3 1.3 1.3zM46.7 53.3h2.7c.8 0 1.3-.5 1.3-1.3v-2.7c0-.8-.5-1.3-1.3-1.3h-2.7c-.8 0-1.3.5-1.3 1.3V52c-.1.8.5 1.3 1.3 1.3z" />
              </svg>
              <p className="text-xs">
                {dayjs(episode.created_at).format("DD/MM/YY")}
              </p>
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
              >
                <path d="M32.1 37.3c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm0-26.6c-5.9 0-10.7 4.8-10.7 10.7S26.3 32 32.1 32s10.7-4.8 10.7-10.7S38 10.7 32.1 10.7zM2.8 58.7c-.8 0-1.6-.3-2.1-1.1-1.1-1.1-.8-2.9.3-3.7 8.8-7.2 19.7-11.2 31.2-11.2s22.4 4 30.9 11.2c1.1 1.1 1.3 2.7.3 3.7-1.1 1.1-2.7 1.3-3.7.3-7.6-6.4-17.4-9.9-27.6-9.9s-20 3.5-27.7 10.1c-.3.3-1.1.6-1.6.6z" />
              </svg>
              <p className="text-xs">{episode.author}</p>
            </div>
            <h3 className="mb-4 text-lg font-semibold">{episode.title}</h3>
            <p>{episode.description}</p>
          </div>
          <AudioPlayer src={episodeAudio} />
        </div>
      </div> */}
    </section>
  );
}
