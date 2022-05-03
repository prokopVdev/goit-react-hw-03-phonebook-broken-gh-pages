import s from './Contacts.module.css';

export default function Contacts({ contacts }) {
  return (
    <ol className={s.list}>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          {name}: {number}
        </li>
      ))}
    </ol>
  );
}
