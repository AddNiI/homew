export const App = () => {
  const name = "Микола"
  const imageUrl = "https://drive.google.com/file/d/1S1iSXIrQSN3FdEpnBWw2LK3bDt-BuCUC/view?usp=sharing"
  const imageAlt = "Вилка"
  const page = {
    name: "Chess",
    URL: "https://www.chess.com/home"
  }
  const num1 = 5
  const num2 = 6
  const Sum = num1 + num2
  const colors = [
    {id: 1, name: "Червоний"}, 
    {id: 2, name: "Синій"}, 
    {id: 3, name: "Зелений"}
  ]
  return (
    <div>
      <h1>{name}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={imageUrl} alt={imageAlt} />
      <a href={page.URL}>{page.name}</a>;
      <p>{Sum}</p>
      <ul>
        {colors.map(color => (
          <li key={color.id}>
            {color.name}
          </li>
        ))}
      </ul>
    </div>
  )

};
