import s from './Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <input className={s.filter} type="text" onChange={onChange} value={value} />
  );
}
