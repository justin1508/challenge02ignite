import { Button } from '../components/Button';
import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface GenreContentProps {
  genres: GenreResponseProps[];
  selectedGenre(id: number): void;
  selectedGenreId: number;
}

const SideBar: React.FC<GenreContentProps> = ({ genres, selectedGenre, selectedGenreId }) => {
  // Complete aqui
  function handleClickButton(id: number) {
    selectedGenre(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}

export default SideBar;