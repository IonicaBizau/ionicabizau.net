If you have any questions, just send me a message. If you just want to say "Hi", that's cool too.

<div id="mb-error" class="animated message-box error hide"></div>
<div id="mb-success" class="animated message-box success hide"></div>
<form id="contact-form" class="contact-form animated" action="/contact" method="POST">
    <input type="hidden" name="formId" value="contact">
    <table>
        <tbody>
            <tr>
                <td>Name</td>
                <td><input type="text" name="name"></td>
            </tr>
            <tr>
                <td>Email Address</td>
                <td><input type="text" name="email"></td>
            </tr>
            <tr>
                <td>Subject</td>
                <td><input type="text" name="subject"></td>
            </tr>
            <tr>
                <td>Message</td>
                <td><textarea name="message"></textarea></td>
            </tr>
            <tr>
                <td></td>
                <td><input type="submit" value="Send"></td>
            </tr>
        </tbody>
    </table>
</form>
<script src="/js/contact-handlers.js"></script>
