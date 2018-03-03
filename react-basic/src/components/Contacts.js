import React from 'react';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        // 유동적인 데이터라 가정하여 state 사용
        this.state = {
            contactData: [
                {name: "Abet", phone: "010-1111-1111"},
                {name: "Tony", phone: "010-1111-2222"},
                {name: "Tida", phone: "010-1111-3333"}
            ]
        };
    }

    render() {
        // key : child 컴포넌트에 identity (독자성) 을 부여
        // Arrow Function : () => {} ES6에 새로 도입
        return (
            <div>
                <h1>Contacts</h1>
                <ul>
                    {this.state.contactData.map((contact, i) => {
                        return (<ContactInfo name={contact.name}
                                            phone={contact.phone}
                                              key={i}/>);
                    })}
                </ul>
            </div>
        );
    }
}

class ContactInfo extends React.Component {
    render() {
        return (
            <li>{this.props.name} {this.props.phone}</li>
        );
    };
}
export default Contacts
