import { User } from './models/User';

const user = new User({ name: 'test', age: 314 });

user.on('change', () => {
  console.log('Hi there!');
});

user.set({name: 'my new name!'});
