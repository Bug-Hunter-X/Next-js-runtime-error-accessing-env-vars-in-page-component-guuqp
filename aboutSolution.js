```javascript
//pages/about.js

export async function getServerSideProps(context) {
  const myVar = process.env.MY_VAR;
  return {
    props: {
      myVar,
    },
  };
}
export default function About({ myVar }) {
  console.log(myVar); //This will work correctly now
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page. MY_VAR = {myVar}</p>
    </div>
  );
}
```