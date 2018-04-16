import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      {
        id: 123456,
        imageUrl:'http://www.indiewire.com/wp-content/uploads/2015/01/dead-man.jpg?w=634',
        title: 'Dead man',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating:9.9
      },
      {
        id: 321654,
        imageUrl:'http://kulturadobra.pl/wp-content/uploads/2013/10/Kill-Bill-mniejszy.jpg',
        title: 'KIll Bill',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating:8.7
      },
      {
        id: 321123,
        imageUrl:'http://kosmos.katowice.pl/wp-content/uploads/2017/09/ghost-in-the-shell.jpg',
        title: 'Ghost in the shell',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          rating:8.3
      }
    ];
    return {movies};
  }
}
