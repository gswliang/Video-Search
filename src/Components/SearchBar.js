import React from 'react';

class SearchBar extends React.Component {
    state = { value: '' };

    onSubmitForm = evt => {
        evt.preventDefault();
        this.props.getValue(this.state.value);
    }
    render() {
        return (
            <div className='ui center aligned segment'>
                <h2>影片搜尋 </h2>
                <form className='ui left icon action input huge'
                    onSubmit={this.onSubmitForm} >
                    <i className="search icon"  ></i>
                    <input type='text'
                        placeholder="Search.."
                        onChange={item => { this.setState({ value: item.target.value }) }}
                    />
                    <button className="ui primary button"
                        onSubmit={this.onSubmitForm}
                    >搜尋</button>
                </form>
            </div >
        );
    }
}

export default SearchBar;