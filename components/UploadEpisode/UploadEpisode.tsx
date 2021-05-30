export const UploadEpisode = ({ register, errors }) => {
  return (
    <section className="flex flex-col">
      <label className="flex flex-col" htmlFor="title">
        <span className="my-2">Title</span>
        <input
          type="text"
          {...register("title", { required: "This field is required" })}
        />
        {errors.title && (
          <p className="mt-2 text-xs text-red-600">{errors.title.message}</p>
        )}
      </label>
      <label className="flex flex-col" htmlFor="description">
        <span className="my-2">Description</span>
        <input
          type="text"
          {...register("description", { required: "This field is required" })}
        />
        {errors.description && (
          <p className="mt-2 text-xs text-red-600">
            {errors.description.message}
          </p>
        )}
      </label>
      <label className="flex flex-col" htmlFor="author">
        <span className="my-2">Author</span>
        <input
          type="text"
          {...register("author", { required: "This field is required" })}
        />
        {errors.author && (
          <p className="mt-2 text-xs text-red-600">{errors.author.message}</p>
        )}
      </label>
      <label className="flex flex-col" htmlFor="season">
        <span className="my-2">Season</span>
        <input
          type="number"
          {...register("season", {
            required: "This field is required",
            valueAsNumber: true,
          })}
        />
        {errors.season && (
          <p className="mt-2 text-xs text-red-600">{errors.season.message}</p>
        )}
      </label>
      <label className="flex flex-col" htmlFor="episode">
        <span className="my-2">Episode</span>
        <input
          type="number"
          {...register("episode", {
            required: "This field is required",
            valueAsNumber: true,
          })}
        />
        {errors.episode && (
          <p className="mt-2 text-xs text-red-600">{errors.episode.message}</p>
        )}
      </label>
      <label className="flex flex-col" htmlFor="image">
        <span className="my-2">Image</span>
        <input
          type="file"
          accept="image/jpeg"
          {...register("image", { required: "This field is required" })}
        />
        {errors.image && (
          <p className="mt-2 text-xs text-red-600">{errors.image.message}</p>
        )}
      </label>
      <label className="flex flex-col" htmlFor="audio">
        <span className="my-2">Audio</span>
        <input
          type="file"
          accept="audio/mp3"
          {...register("audio", { required: "This field is required" })}
        />
        {errors.audio && (
          <p className="mt-2 text-xs text-red-600">{errors.audio.message}</p>
        )}
      </label>
      <button className="p-4 my-4 bg-green-600 text-gray-50" type="submit">
        Upload Episode
      </button>
    </section>
  );
};
