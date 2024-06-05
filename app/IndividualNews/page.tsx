import React from 'react'
import Article from '../components/Article/Article'
import BigStories from '../components/BigStories/BigStories'

const page = () => {
    return (
        <div>
            <p>badge</p>
            <div>
                <Article image='asd' content='content' title='title' time='time' />
                <div>
                    <button>Apply Now</button>
                    <button>Download</button>
                    <div>addversite Banner</div>
                    <div>addversite Banner</div>
                    <div>addversite Banner</div>
                </div>
                <BigStories title='News' />
            </div>

        </div>
    )
}

export default page