import { User } from './models/User';

const user = User.buildUser({ id: 21 });

user.on('change', () => {
  console.log(user);
});

user.fetch();

console.log(user.isAdminUser());
