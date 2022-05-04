import s from './Contacts.module.css';
import { FaRegUserCircle, FaBan } from 'react-icons/fa';
export default function Contacts({ contacts, remove }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <p>
            <FaRegUserCircle size="13px" /> {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => {
              remove(id);
            }}
          >
            <FaBan />
          </button>
        </li>
      ))}
    </ul>
  );
}
