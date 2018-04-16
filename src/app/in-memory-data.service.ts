import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      {
        id: 123456,
        imageUrl:'https://www.indiewire.com/wp-content/uploads/2015/01/dead-man.jpg?w=634',
        title: 'Dead man',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating:9.9
      },
      {
        id: 321654,
        imageUrl:'https://cdn.miramax.com/media/assets/kbv1_scrubbed_a.jpg',
        title: 'KIll Bill',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating:8.7
      },
      {
        id: 321123,
        imageUrl:'https://20ui41tp7v127j03rcnp97oh-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/miklos_ghost.jpg',
        title: 'Ghost in the shell',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          rating:8.3
      },
      {
        id: 132343,
        imageUrl:'https://media.timeout.com/images/101619485/630/472/image.jpg',
        title: 'Stalker',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          rating:9.1
      }
    ];
    return {movies};
  }
}
