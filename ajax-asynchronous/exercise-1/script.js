// 418d123a8a610f690bbd1cdff706380b
const baseUrl = 'http://api.giphy.com';
const apiKey = 'qYIttj92efPhtVUgeS6bpabm0824GIIx';

function search() {
    const searchTxt = document.querySelectorAll('#searchTxt');
    const searchStr = searchTxt.value;
    
    axios.get(`${baseUrl}/v1/gifs/search?q=${searchStr}&api_key=${apiKey}&limit=1`)
        .then((resp) => {
            let data = resp.data.data;
            console.log(data);
            data.forEach(rs => {
                let image = document.createElement('img');
                image.src = rs.images.original.url;
    
                document.querySelector("#container").append(image);
            })
        });
}

function remove() {
    document.querySelector('#container').remove();
}