import React, { Component } from 'react';
import './MemoryCard.css';
import Logo from './DCLogo.png';

class MemoryCard extends Component {
    render() {
        let memoryCardInnerClass = 'MemoryCardInner';
        if (this.props.isFlipped === true) {
            memoryCardInnerClass = 'MemoryCardInner flipped'
        }
        return (
            <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardBack">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="MemoryCardFront">
                        {this.props.symbol}
                    </div>
                </div>
            </div>
        );
    }
}

export default MemoryCard;
