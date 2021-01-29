import React from 'react';
import css from './News.module.css'

const News = (props) => {
    return (
        <div className={css.news}>

            <div >
                <div>
                    Title
                </div>

            </div>
            <div className={css.item}>
                <div>
                    news
                </div>

            </div>

        </div>
    )
}
export default News;