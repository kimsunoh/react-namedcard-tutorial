import React, {Component} from 'react';
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";


class App extends Component {

    id = 3;

    state = {
        information: [
            {
                id: 0,
                name: '김선오',
                phone: '010-0000-0001',
            },
            {
                id: 1,
                name: 'ksno',
                phone: '010-0000-0002',
            },
            {
                id: 2,
                name: 'kimsunoh',
                phone: '010-0000-0003',
            },
        ],
        keyword: '',
    }

    handleChange = (e) => {
        this.setState({
            keyword: e.target.value
        })
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
                <input value={this.state.keyword} onChange={this.handleChange} placeholder="검색..."/>
                <PhoneInfoList
                    data={this.state.information.filter(
                        info => info.name.indexOf(this.state.keyword) > -1
                    )}
                    onRemove={this.handleRemove}
                    onUpdate={this.handleUpdate}
                />
            </div>
        );
    }
}

export default App;
