function MultiNode(x)
{
    this.keys = [];
    this.childs = [];
    this.n = 0;

    for(var i = 0; i < x - 1; i++)
    {
      this.keys.push(undefined);
      this.childs.push(undefined);
    }
    this.childs.push(undefined);
}

function getNode(x)
{
    return new MultiNode(x);
}

function BT()
{
    this.root = undefined;
}

function insertBT(T, m, key)
{
    if(T.root === undefined)
    {
        T.root = getNode(m);
        T.root.keys[0] = key;
        ++T.root.n;
        console.log("");
        return true;
    }
    var x = T.root;
    var stack = [];

    while(x !== undefined)
    {
      var l = 0;
      while((l < x.n) && (key >= x.keys[l]))
      {
          if(key == x.keys[l]) {return false;}
          ++l;
      }
      stack.push(x);
      x = x.childs[l];
    }

    var finished = false;
    x = stack.pop();
    while(!finished)
    {
      var i = 0;
      if(x.n < m - 1)
      {
        while((i < x.n) && (key >= x.keys[i])) {++i;}
        x.keys.splice(i, 0, key);
        ++x.n;
        x.keys.splice(m - 1);

        finished = true;
      }
      else // keys is full
      {
        while((i < x.n) && (key >= x.keys[i])) {++i;}
        x.keys.splice(i, 0, key); // make overflows

        var tempNode = getNode(m);
        var floor = Math.floor(m / 2);
        key = x.keys[floor];
        x.keys[floor] = undefined;

        for(var j = floor + 1; j < m; j++)
        {
          tempNode.childs[j - floor - 1] = x.childs[j];
          x.childs[j] = undefined;
          tempNode.keys[j - floor - 1] = x.keys[j];
          x.keys[j] = undefined;
          ++tempNode.n; --x.n;
        }

        if(x.childs.length > m && x.childs[m] != undefined)
        {
          tempNode.childs[m - floor - 1] = x.childs[m];
          x.childs[m] = undefined;
        }
        if(stack.length > 0)
        {
          var table = stack[stack.length - 1];
          for(var u = 0; u <= table.n; u++)
          {
            if(x == table.childs[u])
            {
                table.childs.splice(u + 1, 0, tempNode);
            }
          }
          x = stack.pop();
        }
        else
        {
          newRoot = getNode(m);
          newRoot.keys[0] = key;
          ++newRoot.n;
          newRoot.childs[0] = x;
          newRoot.childs[1] = tempNode;

          T.root = newRoot;

          finished = true;
        }
      }
    }
    console.log("");
    return true;
}

function deleteBT(T, m, key)
{
  return true;
}

function inorderBT(T)
{
    if(T === undefined) {return;}
    var a = 0;
    while(a < T.n)
    {
        inorderBT(T.childs[a]);
        process.stdout.write(T.keys[a] + " ");
        ++a;
    }
    inorderBT(T.childs[a]);
}

Btree = new BT();
insertBT(Btree, 3, 30); inorderBT(Btree.root);
insertBT(Btree, 3, 20); inorderBT(Btree.root);
insertBT(Btree, 3, 62); inorderBT(Btree.root);
insertBT(Btree, 3, 110); inorderBT(Btree.root);
insertBT(Btree, 3, 140); inorderBT(Btree.root);
insertBT(Btree, 3, 15); inorderBT(Btree.root);
insertBT(Btree, 3, 65); inorderBT(Btree.root);
insertBT(Btree, 3, 136); inorderBT(Btree.root);
insertBT(Btree, 3, 150); inorderBT(Btree.root);
insertBT(Btree, 3, 120); inorderBT(Btree.root);
insertBT(Btree, 3, 40); inorderBT(Btree.root);
insertBT(Btree, 3, 132); inorderBT(Btree.root);
insertBT(Btree, 3, 19); inorderBT(Btree.root);
insertBT(Btree, 3, 128); inorderBT(Btree.root);
insertBT(Btree, 3, 138); inorderBT(Btree.root);
insertBT(Btree, 3, 100); inorderBT(Btree.root);
insertBT(Btree, 3, 16); inorderBT(Btree.root);
insertBT(Btree, 3, 145); inorderBT(Btree.root);
insertBT(Btree, 3, 70); inorderBT(Btree.root);
insertBT(Btree, 3, 42); inorderBT(Btree.root);
insertBT(Btree, 3, 69); inorderBT(Btree.root);
insertBT(Btree, 3, 43); inorderBT(Btree.root);
insertBT(Btree, 3, 26); inorderBT(Btree.root);
insertBT(Btree, 3, 60); inorderBT(Btree.root);
insertBT(Btree, 3, 130); inorderBT(Btree.root);
insertBT(Btree, 3, 50); inorderBT(Btree.root);
insertBT(Btree, 3, 18); inorderBT(Btree.root);
insertBT(Btree, 3, 7); inorderBT(Btree.root);
insertBT(Btree, 3, 36); inorderBT(Btree.root);
insertBT(Btree, 3, 58); inorderBT(Btree.root);
insertBT(Btree, 3, 22); inorderBT(Btree.root);
insertBT(Btree, 3, 41); inorderBT(Btree.root);
insertBT(Btree, 3, 59); inorderBT(Btree.root);
insertBT(Btree, 3, 57); inorderBT(Btree.root);
insertBT(Btree, 3, 54); inorderBT(Btree.root);
insertBT(Btree, 3, 33); inorderBT(Btree.root);
insertBT(Btree, 3, 75); inorderBT(Btree.root);
insertBT(Btree, 3, 124); inorderBT(Btree.root);
insertBT(Btree, 3, 122); inorderBT(Btree.root);
insertBT(Btree, 3, 123); inorderBT(Btree.root);

Btree = new BT();
insertBT(Btree, 4, 30); inorderBT(Btree.root);
insertBT(Btree, 4, 20); inorderBT(Btree.root);
insertBT(Btree, 4, 62); inorderBT(Btree.root);
insertBT(Btree, 4, 110); inorderBT(Btree.root);
insertBT(Btree, 4, 140); inorderBT(Btree.root);
insertBT(Btree, 4, 15); inorderBT(Btree.root);
insertBT(Btree, 4, 65); inorderBT(Btree.root);
insertBT(Btree, 4, 136); inorderBT(Btree.root);
insertBT(Btree, 4, 150); inorderBT(Btree.root);
insertBT(Btree, 4, 120); inorderBT(Btree.root);
insertBT(Btree, 4, 40); inorderBT(Btree.root);
insertBT(Btree, 4, 132); inorderBT(Btree.root);
insertBT(Btree, 4, 19); inorderBT(Btree.root);
insertBT(Btree, 4, 128); inorderBT(Btree.root);
insertBT(Btree, 4, 138); inorderBT(Btree.root);
insertBT(Btree, 4, 100); inorderBT(Btree.root);
insertBT(Btree, 4, 16); inorderBT(Btree.root);
insertBT(Btree, 4, 145); inorderBT(Btree.root);
insertBT(Btree, 4, 70); inorderBT(Btree.root);
insertBT(Btree, 4, 42); inorderBT(Btree.root);
insertBT(Btree, 4, 69); inorderBT(Btree.root);
insertBT(Btree, 4, 43); inorderBT(Btree.root);
insertBT(Btree, 4, 26); inorderBT(Btree.root);
insertBT(Btree, 4, 60); inorderBT(Btree.root);
insertBT(Btree, 4, 130); inorderBT(Btree.root);
insertBT(Btree, 4, 50); inorderBT(Btree.root);
insertBT(Btree, 4, 18); inorderBT(Btree.root);
insertBT(Btree, 4, 7); inorderBT(Btree.root);
insertBT(Btree, 4, 36); inorderBT(Btree.root);
insertBT(Btree, 4, 58); inorderBT(Btree.root);
insertBT(Btree, 4, 22); inorderBT(Btree.root);
insertBT(Btree, 4, 41); inorderBT(Btree.root);
insertBT(Btree, 4, 59); inorderBT(Btree.root);
insertBT(Btree, 4, 57); inorderBT(Btree.root);
insertBT(Btree, 4, 54); inorderBT(Btree.root);
insertBT(Btree, 4, 33); inorderBT(Btree.root);
insertBT(Btree, 4, 75); inorderBT(Btree.root);
insertBT(Btree, 4, 124); inorderBT(Btree.root);
insertBT(Btree, 4, 122); inorderBT(Btree.root);
insertBT(Btree, 4, 123); inorderBT(Btree.root);
console.log();
