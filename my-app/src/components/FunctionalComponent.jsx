import { useEffect, useState } from "react";

const FunctionalComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState(undefined);
  const [productId, setProductId] = useState(undefined);

  const onProductIdChange = (e) => {
    if (e.target.value === "") {
      setLoaded(false);
      setData(undefined);
    }
    setProductId(Number(e.target.value));
  };
  useEffect(() => {
    if (productId) {
      setIsLoading(true);
      fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => res.json())
        .then((json) => {
          setData({
            id: json.id,
            title: json.title,
            price: json.price,
          });
          setLoaded(true);
          setIsLoading(false);
        });
    }
  }, [productId]);

  return (
    <div>
      <input type="number" onChange={onProductIdChange} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        loaded && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>id: {data.id}</span>
            <span>title: {data.title}</span>
            <span>price: {data.price}</span>
          </div>
        )
      )}
    </div>
  );
};

export default FunctionalComponent;
