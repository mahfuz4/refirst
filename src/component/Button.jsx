import React from 'react';

class Button extends React.Component {

    shouldComponentUpdate(nextProps) {

        const{change: current, locale: clocale} = this.props
        const {change: next, locale: nextlocale } = nextProps
        if(current === next && clocale === nextlocale) {
            return false
        }else {
            return true
        }
    }    

    render() {
        const {change, locale, show, eneble} = this.props
        if(!eneble) return null;
        return (
            <>
            <button type ="button" onClick={() =>change(locale)} > {locale === 'bn-BD'? 'change': 'poriborton'} </button>
            {show && <p>hello</p>}
            </>
        )

        }

    
}

export default Button