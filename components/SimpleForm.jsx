function SimpleForm(props) {
    return (
        <form action="">
            <input name="uncontrolled" placeholder="I can be changed" />
            <input name="controlled" value="I can't be changed" />
        </form>
    );
}
ù
ReactDOM.render(<SimpleForm />, document.getElementById("root"));

