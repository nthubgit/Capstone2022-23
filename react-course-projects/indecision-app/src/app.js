console.log("App.js is running")

//JSX - JavaScript XML
const app = {
    title: "Indecision App",
    subtitle: <p>"Put your life in the hands of a computer"</p>,
    options: ["One", "Two"]
};
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && app.subtitle}
        <p>{(app.options.length > 0) ? "Here are your options:" : "No options"}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

//demo stuff
const user = {
    name: 'Tyler',
    age: 26,    
    location: 'Canada'
};

function getLocation(location){
    if (location){
       return  <p>Location: {location}</p>; 
    }
    return undefined;
}

const template2 = (
    <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
    </div>
)
const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);