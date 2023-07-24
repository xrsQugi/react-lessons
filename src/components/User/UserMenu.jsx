import { useUser } from "./UserContext";
import css from './Usermenu.module.css';


export const UserMenu = () => {
  const { isLoggedIn, username, logIn, logOut } = useUser();

  return (
    <div className={css.btn_block}>
      {isLoggedIn ? (
        <button className={css.btn_log} onClick={logOut}>Log out</button>
      ) : (
        <button className={css.btn_log} onClick={logIn}>Log in</button>
      )}
      {isLoggedIn && <p className={css.username}>{username}</p>}
    </div>
  );
};
