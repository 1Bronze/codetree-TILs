#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> v;
    
    int a;
    cin >> a;
    v.push_back(a);
    sort(v);
    cout << v[1];

    return 0;
}