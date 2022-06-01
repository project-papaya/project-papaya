/* eslint-disable-next-line */
export interface PapayaProps { }

export function Papaya(props: PapayaProps) {

    fetch('./api')
        .then(result => {
            result.json()
                .then(json => {
                    console.log(json);
                })
        })

    return (
        <h1>Welcome to Papaya!</h1>
    );
}

export default Papaya;
