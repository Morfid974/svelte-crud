<script lang="ts">
    import axios from "axios";
    import { fly } from "svelte/transition";
    import {
        Button,
        ButtonGroup,
        Col,
        Row,
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
        Input,
        Label,
        Table,
    } from "sveltestrap";
    import { onMount } from "svelte";
    import NavBar from "../components/NavBar.svelte";
    
    var books = [];
    var addBookForm = {
        title: "",
        author: "",
        description: "",
    };
    var editForm = {
        _id: "",
        title: "",
        author: "",
        description: "",
    };

    function getBooks() {
        axios.get("/backend/books").then((res) => {
            books = res.data;
        });
    }

    function removeBook(bookID) {
        const path = `/backend/books/${bookID.book._id}`;
        axios
            .delete(path)
            .then(() => {
                getBooks();
            })
            .catch((error) => {
                console.error(error);
                getBooks();
            });
    }

    function initForm() {
        addBookForm.title = "";
        addBookForm.author = "";
        addBookForm.description = "";
        editForm._id = "";
        editForm.title = "";
        editForm.author = "";
        editForm.description = "";
    }

    function addBook() {
        const payload = {
            title: addBookForm.title,
            author: addBookForm.author,
            description: addBookForm.description,
        };
        const path = "/backend/books";
        axios
            .post(path, payload)
            .then(() => {
                getBooks();
            })
            .catch((error) => {
                console.log(error);
                getBooks();
            });
        addtoggle();
    }

    function editBook(book) {
        updatetoggle();
        editForm = book.book;
    }

    function updateBook() {
        const payload = {
            title: editForm.title,
            author: editForm.author,
            description: editForm.description,
        };
        const path = `/backend/books/${editForm._id}`;
        axios
            .put(path, payload)
            .then(() => {
                getBooks();
            })
            .catch((error) => {
                console.error(error);
                getBooks();
            });
        updatetoggle();
    }
    onMount(getBooks);
    let addopen = false;

    function addtoggle() {
        initForm();
        addopen = !addopen;
    }
    let updateopen = false;

    function updatetoggle() {
        initForm();
        updateopen = !updateopen;
    }
</script>

<NavBar />
<div>
    <div class="row">
        <div class="col-sm-12">
            <h1>Books</h1>
            <hr />
            <br />
            <Button color="success" on:click={addtoggle}>Add Book</Button>
            <br /><br />
            <Table hover>
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Description</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {#each books as book}
                        <tr transition:fly={{ y: 48, duration: 200 }}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.description}</td>
                            <td
                                ><span style="float: right;">
                                    <Button
                                        color="warning"
                                        on:click={() => editBook({ book })}
                                        >Update</Button
                                    >
                                    <Button
                                        color="danger"
                                        on:click={() => removeBook({ book })}
                                        >Delete</Button
                                    >
                                </span>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </Table>
        </div>
    </div>
    <Modal isOpen={addopen}>
        <ModalHeader>Add a new book</ModalHeader>
        <ModalBody>
            <Label for="newTitle">Title:</Label>
            <Input
                type="text"
                bind:value={addBookForm.title}
                placeholder="book title"
            />
            <p />
            <Label for="newAuthor">Author:</Label>
            <Input
                type="text"
                bind:value={addBookForm.author}
                placeholder="book author"
            />
            <p />
            <Label for="newTitle">Description:</Label>
            <Input
                type="text"
                bind:value={addBookForm.description}
                placeholder="book description"
            />
        </ModalBody>
        <ModalFooter>
            <Button color="primary" on:click={addBook}>Add book</Button>
            <Button color="secondary" on:click={addtoggle}>Cancel</Button>
        </ModalFooter>
    </Modal>
    <Modal isOpen={updateopen}>
        <ModalHeader>Update book</ModalHeader>
        <ModalBody>
            <Label for="newTitle">Title:</Label>
            <Input
                type="text"
                bind:value={editForm.title}
                placeholder="book title"
            />
            <p />
            <Label for="newAuthor">Author:</Label>
            <Input
                type="text"
                bind:value={editForm.author}
                placeholder="book author"
            />
            <p />
            <Label for="newTitle">Description:</Label>
            <Input
                type="text"
                bind:value={editForm.description}
                placeholder="book description"
            />
        </ModalBody>
        <ModalFooter>
            <Button color="primary" on:click={updateBook}>Update</Button>
            <Button color="secondary" on:click={updatetoggle}>Cancel</Button>
        </ModalFooter>
    </Modal>
</div>
