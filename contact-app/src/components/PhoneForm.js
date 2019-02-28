import React, {Component} from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(); // submit 시 페이지가 리로드 되는 것을 방지하기 위한 이벤트 clean 처리
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: '',
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChange}
                    value={this.state.name}
                    placeholder="이름"
                    name="name"
                />
                <input
                    onChange={this.handleChange}
                    value={this.state.phone}
                    placeholder="전화번호"
                    name="phone"
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;
