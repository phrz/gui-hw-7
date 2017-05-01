import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockAPIService implements InMemoryDbService {
	createDb() {
		let movies = [
			{ id: 1, title: 'It Came from the API!', year: 1988, imagePath: 'images/shining.jpg', rating: 1 },
			{ id: 2, title: 'Planet of the APIs', year: 2001, imagePath: 'images/nemo.jpg', rating: 1 }
		];
		return {movies};
	}
}