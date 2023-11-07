function SimpleForm(props) {
    return (
        <form action="">
            <input name="uncontrolled" placeholder="I can be changed" />
            <input name="controlled" placeholder="I can't be changed" />
        </form>
    );
}

ReactDOM.render(<SimpleForm />, document.getElementById("root"));

