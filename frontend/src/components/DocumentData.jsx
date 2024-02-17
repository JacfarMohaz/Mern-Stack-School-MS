function DocumentData(props) {
    return <div>
            <div className=" w-[18em] text-white p-2 rounded-lg h-[10em]">
                <embed src={props.fileName}/>
            </div>
        </div>
}

export default DocumentData