
const AddNote = () => {
	return (
		<div className="note new">
			<textarea rows="8" cols="10" placeholder="Type to add note ..."></textarea>
			<div className="note-footer">
				<small>200 Remaining</small>
				<div className="seva">Seva</div>
			</div>
		</div>
	)
}

export default AddNote;