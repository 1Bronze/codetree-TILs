#include <iostream>
using namespace std;

int arr[11][11];

int main() {
    int n; cin >> n;

    int cnt = 1;
    for (int j=n; j>=1; j--) {
        if (j%2 == 0) { // 짝수 -> 아래부터
            for (int i=n; i>=1; i--)
                arr[i][j] = cnt++;
        } else { // 홀수 -> 위부터
            for (int i=1; i<= n; i++)
                arr[i][j] = cnt++;
        }
    }

    for (int i=1; i<=n; i++) {
        for (int j=1; j<=n; j++) {
            cout << arr[i][j] << " ";
        }
        cout << "\n";
    }

    return 0;
}