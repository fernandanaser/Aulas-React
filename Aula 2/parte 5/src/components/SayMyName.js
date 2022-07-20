import styles from './SayMyName.module.css';

function SayMyName(props) {
  return (
    <div className={styles.sayMyName}>
      <p>Fala ai {props.name}, suave?</p>
    </div>
  );
}

export default SayMyName;
