import styled from 'styled-components';
import NextHead from 'next/head';
import db from '../../../db.json';
import React from 'react';

function MyHead() {
    return (
        <div>
             <NextHead>
                <title>{db.title}</title>
                <meta property="og:title" content={db.title} key="title" />
                <meta property="og:url" content="https://jesus-freak-quiz.marcio-olmedo-cavalini.vercel.app/" />
                <meta property="og:image" content="https://jesus-freak-quiz.marcio-olmedo-cavalini.vercel.app/img/BG_JF.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="800" />
                <meta property="og:image:height" content="600" />
            </NextHead>
        </div>
    );
}

export default MyHead;