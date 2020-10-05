import React, { useState } from 'react'
import { Table } from 'react-bootstrap'


export const Home: React.FC = () => {
    const prize = 50000
    const [medals, setMedals] = useState(prize)
    
    const numberWithCommas = (x: number) => {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <React.Fragment>
        <div>
            <h1>1945 Air Force</h1>
            <p>The following unofficial guide is a strategy guide that will help with the information that you need to know in order to get the most of the game.</p>
            <p>The main focus of this guide is to provide helpful tips to maximise your gameplay so you can continue advancing through the game without necesarily spending your hard earned cash.</p>
            <p>Note that without spending money on this game you'll need to sacrifice time and effort to be able to obtain the best prizes.</p>
            
            <h2>Special Event</h2>
            <p>During a Special Event enemies drop medals which you can then
                exchange for fixed prizes depending on the amount of medals you have acumulated. The biggest prize (an aircraft) costs {numberWithCommas(medals)} medals.</p>
                <p>Events last for 13 days which means that if you want to obtain
                the biggest prize, you need to get at least 3,847 medals a day.
            </p>
            <p>The following table shows the amount of medals you should at least have during the following event days: <br />
            13th: {numberWithCommas(Math.ceil(medals/13))}<br />
            12th: {numberWithCommas(Math.ceil(medals/13)*2)}<br />
            11th: {numberWithCommas(Math.ceil(medals/13)*3)}<br />
            10th: {numberWithCommas(Math.ceil(medals/13)*4)}<br />
            9th: {numberWithCommas(Math.ceil(medals/13)*5)}<br />
            8th: {numberWithCommas(Math.ceil(medals/13)*6)}<br />
            7th: {numberWithCommas(Math.ceil(medals/13)*7)}<br />
            6th: {numberWithCommas(Math.ceil(medals/13)*8)}<br />
            5th: {numberWithCommas(Math.ceil(medals/13)*9)}<br/>
            4th: {numberWithCommas(Math.ceil(medals/13)*10)}<br/>
            3rd: {numberWithCommas(Math.ceil(medals/13)*11)}<br/>
            2nd: {numberWithCommas(Math.ceil(medals/13)*12)}<br/>
            1st: {numberWithCommas(Math.ceil(medals/13)*13)}</p>
            {/*<p>The following table shows the amount of medals you should at least have during the following event days: <br />
            13th: 3,847<br />
            12th: 7,694<br />
            11th: 11,541<br />
            10th: 15,388<br />
            9th: 19,235<br />
            8th: 23,082<br />
            7th: 26929<br />
            6th: 30,776<br />
            5th: 34,623<br/>
            4th: 38,470<br/>
            3rd: 42,317<br/>
            2nd: 46,164<br/>
            1st: 50,011</p>*/}
            
            <p>On the start of each day the first 6 stages you play will provide you a boosted amount of medals. Which means you should leverage these and play the stages that provide you the most medals so you can maximise the medals obtained.</p>
            <p>After playing these first 6 times, the stages will be nerfed back to normal. Still you will need to keep playing the stages that provide the most medals in order to achieve the daily amount you need in order to obtain the big prize which is one of the aircrafts that show the "unlocked at event" description.</p>

            {/*<p>111111<br />111111111</p>*/}
            <p>After playing a total of 6 times the amount of event medals will be nerfed.</p>
            <p>In the following tables, I provide the maximum amount I have confirmed per stage.</p>
            <h3>Campaign missions</h3>
            <div className="">
                <Table className="table table-hover table-sm">
                    <thead className="thead-light">
                        <tr>
                            <th>Campaign Mission</th>
                            <th>Coins</th>
                            <th colSpan={2}>Event Medals</th>
                            <th>Event Coins</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1st nerf</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>41</td>
                            <td>497-501</td>
                            <td>151</td>
                            <td>86-88</td>
                            <td>58</td>
                        </tr>
                    </tbody>
                </Table>
                <br />
{/*
                <Table striped bordered hover responsive="md">
                    <thead>
                        <tr>
                            <th>Bombarding</th>
                            <th>Coins</th>
                            <th colSpan={2}>Medals</th>
                            <th>Event</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1st nerf</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>41</td>
                            <td>427</td>
                            <td>151</td>
                            <td>86-88</td>
                            <td>58</td>
                        </tr>
                    </tbody>
</Table>*/}
            </div>

        </div>
        </React.Fragment>
    )
}

export default Home
