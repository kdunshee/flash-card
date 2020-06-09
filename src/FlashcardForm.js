import React from "react"

class FlashcardForm extends React.Component {
    state = {
        word: ""
    }

    handleChange = (e) => {
        this.setState({word: e.target.value})
    }

    handleSubmit= (e) => {
        e.preventDefault();
            this.props.addCard(this.state.word)
    }
    render() {
        return (
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <input
                    value ={this.state.word}
                    required
                    placeholder={"Add a new card idiot"}
                    onChange ={this.handleChange}
                    />
                </form>
            </div>

        );
    };
};


export default FlashcardForm;