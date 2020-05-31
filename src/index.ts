import { User } from './models/User';

const user = new User({ name: 'test', age: 314 });
user.save();
user.events.on('click', () => {
  console.log('Click');
});
user.events.trigger('click');
