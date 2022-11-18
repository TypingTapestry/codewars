function filter(head, p) {
    if (!head) return head;
    if (!p(head.data)) return filter(head.next, p);
    else return new Node(head.data, filter(head.next, p));
}