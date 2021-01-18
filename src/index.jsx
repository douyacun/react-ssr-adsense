import React, { useEffect } from "react";
import PropTypes from 'prop-types';

function Google({ style, format, layoutKey, client, slot, responsive, layout, className }) {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.log(err);
        }
    }, []);
    const props = {
        className: "adsbygoogle"
    }
    if (style !== "") {
        props["style"] = style
    }
    if (format !== "") {
        props["data-ad-format"] = format
    }
    if (layoutKey !== "") {
        props["data-ad-layout-key"] = layoutKey
    }
    if (layout !== "") {
        props["data-ad-layout"] = layout
    }
    if (client !== "") {
        props["data-ad-client"] = client
    }
    if (slot !== "") {
        props["data-ad-slot"] = slot
    }
    if (responsive != "") {
        props["data-full-width-responsive"] = responsive
    }
    if (className != "") {
        props["className"] + " " + className
    }
    return (
        <ins {...props}></ins>
    );
};

Google.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object, // eslint-disable-line
    client: PropTypes.string.isRequired,
    slot: PropTypes.string.isRequired,
    layout: PropTypes.string,
    layoutKey: PropTypes.string,
    format: PropTypes.string,
    responsive: PropTypes.string
};

Google.defaultProps = {
    className: '',
    style: { display: 'block' },
    format: 'auto',
    layout: '',
    layoutKey: '',
    responsive: 'false'
};

export default Google