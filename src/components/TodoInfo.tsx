import classNames from 'classnames';
import { User } from '../types/User';
import { UserInfo } from './UserInfo';
import './Todo.scss';

type Props = {
  title: string;
  status: boolean;
  user: User | null;
};
export const TodoInfo: React.FC<Props> = ({ title, status, user }) => (
  <>
    <h2 className="Todo__title">{title}</h2>
    <p className={classNames('Todo__status',
      { Todo__active: status === true })}
    >
      {status ? 'completed' : 'not completed'}
    </p>
    <UserInfo info={user} />
  </>
);
