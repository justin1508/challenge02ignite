import { MovieCard } from '../components/MovieCard';
import '../styles/content.scss';
import Header from './Header';

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  moviesProps: MovieProps[];
  title: string;
}

const Content: React.FC<ContentProps> = ({ moviesProps, title }) => {
  // Complete aqui
  return (
    <div className="container">
      <Header Category={title} />

      <main>
        <div className="movies-list">
          {moviesProps.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>

  )

}

export default Content;