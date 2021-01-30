import React from 'react'

const UserOutput = (props) => {
    const style = {
        textSize: '1rem',
        color: 'green',
        margin: '2rem 3rem', 
        padding: '2rem',
        border: '1px solid #ccc',
        boxShadow: '2px 3px #ccc'
    }
    return (
        <div>
            <h1>Welcome {props.username}</h1>
            <p style={style}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ipsum elit, rutrum non tristique tristique, tincidunt ut arcu. Curabitur id justo sit amet lacus viverra finibus in at orci. Cras interdum eleifend pellentesque. Duis eget lorem mollis, sagittis lacus egestas, consequat est. Nunc ut felis sit amet ante consequat commodo. Suspendisse tincidunt dui ante, ut sollicitudin arcu posuere sed. Nam condimentum, mi ut posuere accumsan, est justo rutrum risus, eu ullamcorper metus est vel urna. Cras ut semper mauris. Aliquam id felis ut magna tincidunt congue. Quisque id lorem mollis, rhoncus tellus ac, hendrerit enim. Suspendisse id urna eget velit interdum luctus venenatis id felis. Nullam sollicitudin nunc ut ex elementum, vel porta erat porta. Donec luctus vel nisl in viverra. Maecenas quis ipsum porta, sollicitudin metus sed, blandit nulla. Fusce blandit elit nec ante sodales, quis euismod nulla gravida. Pellentesque vitae dictum dolor.
            </p>
            <p style={style}>
                Nullam eget elit enim. Ut placerat neque in justo lobortis bibendum. Suspendisse euismod porta elit, ut gravida sapien ultricies pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent interdum congue tellus, et vehicula erat tincidunt vel. Etiam eu tincidunt leo. Donec malesuada, magna vel pretium dignissim, nisi est sollicitudin ante, non porta erat felis quis nisi. Nulla pellentesque ac odio sit amet ultrices. Proin felis lorem, suscipit sed mollis nec, lacinia at orci. Etiam rutrum feugiat tincidunt. Proin fermentum ligula sit amet elit convallis lobortis. Fusce vel dolor mauris. Nam dictum vulputate sapien, at vulputate justo ornare aliquam. Sed ullamcorper sagittis vehicula.
            </p>
        </div>
    )
}

export default UserOutput
