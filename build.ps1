Remove-Item .\docs -Recurse

npm run build

Copy-Item .\dist .\docs -Recurse