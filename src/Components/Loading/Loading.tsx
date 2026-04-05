import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <div className={styles.spiner}></div>
      </div>
    </div>
  );
};

export default Loading;
