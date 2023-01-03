import * as React from 'react';
import { IFooterProps } from '~/types';
import Label from '../label';

/**
 * import styles
 */
import './style.scss';

/**
 * import components
 */

class Footer extends React.PureComponent<IFooterProps> {
    render() {
        if (this.props.players.length != 2) throw new Error('there must be 2 players');

        const player1 = this.props.players[0],
            player2 = this.props.players[1];

        return (
            <div className="row gx-4 px-2">
                <div className="col">
                    <Label className="border border-2 border-primary text-primary flex-column">
                        <span className="h2 mb-0">{player1.score}</span>
                        <small className="opacity-75">x ({player1.name})</small>
                    </Label>
                </div>
                <div className="col">
                    <Label className="border border-2 border-light text-light flex-column">
                        <span className="h2 mb-0">
                            {this.props.rounds - player1.score - player2.score}
                        </span>
                        <small className="opacity-75">ties</small>
                    </Label>
                </div>
                <div className="col">
                    <Label className="border border-2 border-secondary text-secondary flex-column">
                        <span className="h2 mb-0">{player2.score}</span>
                        <small className="opacity-75">o({player2.name})</small>
                    </Label>
                </div>
            </div>
        );
    }
}

export default Footer;
