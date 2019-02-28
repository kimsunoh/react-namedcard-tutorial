import React, {Component} from 'react';
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";


class App extends Component {

    id = 0;

    state = {
        information: [],
    }

    handleCreate = (data) => {
        this.setState({ //setState 하는 이유는 값이 변하면 리렌더링 되게 하기휘해서이므로 id는 setState를 사용하지 않아도 된다
            information: this.state.information.concat(Object.assign({}, data, {id: this.id++}))
        })
    }

    handleRemove = (id) => {
        const {information} = this.state;

        this.setState({
            information: information.filter(info => info.id !== id)
        })
    }

    handleUpdate = (id, data) => {
        const {information} = this.state;
        this.setState({
            information: information.map(
                info => {
                    if (info.id === id) {
                        return {
                            id,
                            ...data,
                        };
                    }
                    return info;
                }
            )
        })
    }

    render() {
        return (
            <div>
                <PhoneForm onCreate={this.handleCreate}/>
                <PhoneInfoList
                    data={this.state.information}
                    onRemove={this.handleRemove}
                    onUpdate={this.handleUpdate}
                />
            </div>
        );
    }
}

export default App;
