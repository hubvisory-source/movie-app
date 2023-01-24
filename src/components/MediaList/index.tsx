import { FC } from "react";
import Media from "../../components/Media";
import s from "./MediaList.module.css";
import useFetch from "../../hooks/useFecth";
import { MediaType } from "../../types";
import { buildUrl } from "../../utils/url";

type Props = {
  title: string;
  endpoint: string;
};

const MediaList: FC<Props> = ({ title, endpoint }) => {
  const { data } = useFetch<MediaType[]>(buildUrl(endpoint), (result: any) => {
    return result.results.map((el: any) => ({
      id: el.title ? `movie_${el.id}` : `tv_${el.id}`,
      title: el.title || el.name,
      releaseDate: el.release_date || el.first_air_date,
      image: el.poster_path,
    }));
  });

  if (!data) return <>Loading ...</>;
  return (
    <section className={s.sectionContainer}>
      <h2>{title}</h2>
      <div className={s.mediaContainer}>
        {data && data.map((media) => <Media key={media.id} {...media} />)}
      </div>
    </section>
  );
};
export default MediaList;
