function LoadMoreBtn({ onClick }) {
  return (
    <div style={{ textAlign: "center", margin: "16px" }}>
      <button onClick={onClick}>Daha Fazla Yükle</button>
    </div>
  );
}

export default LoadMoreBtn;
