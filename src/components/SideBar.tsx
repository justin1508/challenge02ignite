import { memo } from 'react';
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

export function SideBarComponent({ genres, selectedGenre, selectedGenreId }: GenreContentProps) {
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

// export default SideBar;

export const SideBar = memo(SideBarComponent, (prevProps, nextProps) => {
	return Object.is(prevProps.genres, nextProps.genres);
});