import React from 'react';
import StoryStyle from '../Styles/Story.module.css';
import FeatureStyle from '../Styles/Feature.module.css';
import HeroStyle from "../Styles/Hero.module.css"
import story1 from "../assets/story1.jpg"
import story2 from "../assets/story2.jpg"
import story3 from "../assets/story3.jpg"
import story4 from "../assets/story4.jpg"

const stories = [
    {
        title: "John's Story",
        description: 'Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh ',
        image: story1,
    },
    {
        title: 'The Journey',
        description: 'Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc',
        image: story2,
    },
    {
        title: 'Catch Day',
        description: 'Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque',
        image: story3,
    },
    {
        title: 'Trout Tales',
        description: 'Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed',
        image: story4,
    },
];

const Story = () => {
    return (
        <div className={StoryStyle.Story}>
            <div className={StoryStyle.container}>
                <div className={FeatureStyle.headingcontainer}>
                    <div className={HeroStyle.heading}>
                        <label>Member stories</label>
                    </div>
                </div>
                <div>
                    <div className={StoryStyle.StoryContainer}>
                        {stories.map((story, index) => (
                            <div key={index} className={StoryStyle.StoryCard}>
                                <div className={StoryStyle.imagecontainer}>
                                    <img src={story.image} alt={story.title} className={StoryStyle.StoryImage} />
                                </div>
                                <div className={StoryStyle.StoryContent}>
                                    <h3 className={StoryStyle.StoryTitle}>{story.title}</h3>
                                    <p className={StoryStyle.StoryDescription}>{story.description}</p>
                                    <button className={StoryStyle.ReadMoreButton}>Read more</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Story;